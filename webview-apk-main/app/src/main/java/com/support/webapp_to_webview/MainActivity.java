package com.support.webapp_to_webview;

import android.app.DownloadManager;
import android.content.Context;
import android.content.DialogInterface;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.view.View;
import android.webkit.DownloadListener;
import android.webkit.PermissionRequest;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ProgressBar;
import android.widget.Toast;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import android.content.pm.PackageManager;
import android.Manifest;

public class MainActivity extends AppCompatActivity {
    private WebView myWebView;
    private ProgressBar progressBar;
    private String pendingPdfUrl; // Guardar URL del PDF cuando el usuario elija descargar

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Pedir permiso de almacenamiento en Android 6+ (API 23+)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (checkSelfPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE)
                    != PackageManager.PERMISSION_GRANTED) {
                requestPermissions(new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE}, 1);
            }
        }

        startWebView("pasantias-tawny.vercel.app/admin.html");
    }

    @Override
    public void onBackPressed() {
        if (myWebView.canGoBack()) {
            myWebView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    private void startWebView(String url) {

        progressBar = findViewById(R.id.progressBar);
        progressBar.setVisibility(View.VISIBLE);

        myWebView = findViewById(R.id.webview);
        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true); // Necesario para Google Docs
        myWebView.getSettings().setMediaPlaybackRequiresUserGesture(false);

        myWebView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onPermissionRequest(final PermissionRequest request) {
                request.grant(request.getResources());
            }
        });

        myWebView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                // Detectar si es un PDF
                if (isPdfUrl(url)) {
                    // Mostrar diálogo preguntar qué hacer
                    pendingPdfUrl = url;
                    showPdfOptionsDialog(url);
                    return true; // Nosotros manejamos la URL
                }

                // No es PDF - cargar normalmente
                view.loadUrl(url);
                return true;
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                if (progressBar.isShown()) {
                    progressBar.setVisibility(View.GONE);
                }
            }

            @Override
            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                Toast.makeText(MainActivity.this, "Error:" + description, Toast.LENGTH_SHORT).show();
            }
        });

        // Manejador de descargas (para cuando el usuario elige descargar directamente)
        myWebView.setDownloadListener(new DownloadListener() {
            @Override
            public void onDownloadStart(String downloadUrl, String userAgent,
                                        String contentDisposition, String mimeType,
                                        long contentLength) {

                String fileName = getFileName(contentDisposition, downloadUrl);

                DownloadManager.Request request = new DownloadManager.Request(Uri.parse(downloadUrl));
                request.setTitle(fileName);
                request.setDescription("Descargando archivo...");
                request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
                request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, fileName);

                if (mimeType != null && !mimeType.isEmpty()) {
                    request.setMimeType(mimeType);
                }

                DownloadManager downloadManager = (DownloadManager) getSystemService(Context.DOWNLOAD_SERVICE);
                if (downloadManager != null) {
                    downloadManager.enqueue(request);
                    Toast.makeText(MainActivity.this, "Descargando: " + fileName, Toast.LENGTH_LONG).show();
                } else {
                    Toast.makeText(MainActivity.this, "Error: No se pudo iniciar la descarga", Toast.LENGTH_SHORT).show();
                }
            }
        });

        myWebView.loadUrl("https://" + url);
    }

    /**
     * Detecta si una URL apunta a un archivo PDF
     */
    private boolean isPdfUrl(String url) {
        String lowerUrl = url.toLowerCase();
        return lowerUrl.endsWith(".pdf") ||
                lowerUrl.contains(".pdf?") ||
                lowerUrl.contains(".pdf#") ||
                lowerUrl.contains(".pdf&");
    }

    /**
     * Muestra un diálogo para elegir entre VER o DESCARGAR el PDF
     */
    private void showPdfOptionsDialog(String pdfUrl) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Documento PDF");
        builder.setMessage("¿Qué deseas hacer con este archivo?");

        builder.setPositiveButton("📖 Ver", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                showPdfWithGoogleDocs(pdfUrl);
            }
        });

        builder.setNegativeButton("⬇️ Descargar", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                downloadPdfDirectly(pdfUrl);
            }
        });

        builder.setNeutralButton("❌ Cancelar", null);

        builder.show();
    }

    /**
     * Muestra un PDF usando Google Docs Viewer
     */
    private void showPdfWithGoogleDocs(String pdfUrl) {
        try {
            // Codificar la URL para que Google Docs la entienda
            String encodedUrl = Uri.encode(pdfUrl);

            // Usar Google Docs Viewer
            String googleViewerUrl = "https://docs.google.com/viewerng/viewer?embedded=true&url=" + encodedUrl;

            // Cargar el visor
            myWebView.loadUrl(googleViewerUrl);

        } catch (Exception e) {
            Toast.makeText(this, "Error al abrir el visor", Toast.LENGTH_SHORT).show();
            // Si falla Google Docs, ofrecer descargar
            downloadPdfDirectly(pdfUrl);
        }
    }

    /**
     * Descarga el PDF directamente al dispositivo
     */
    private void downloadPdfDirectly(String pdfUrl) {
        try {
            String fileName = getFileName(null, pdfUrl);

            DownloadManager.Request request = new DownloadManager.Request(Uri.parse(pdfUrl));
            request.setTitle(fileName);
            request.setDescription("Descargando PDF...");
            request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
            request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, fileName);
            request.setMimeType("application/pdf");

            DownloadManager downloadManager = (DownloadManager) getSystemService(Context.DOWNLOAD_SERVICE);
            if (downloadManager != null) {
                downloadManager.enqueue(request);
                Toast.makeText(this, "Descargando: " + fileName, Toast.LENGTH_LONG).show();
            } else {
                Toast.makeText(this, "Error: No se pudo iniciar la descarga", Toast.LENGTH_SHORT).show();
            }
        } catch (Exception e) {
            Toast.makeText(this, "Error al descargar: " + e.getMessage(), Toast.LENGTH_SHORT).show();
        }
    }

    /**
     * Obtiene el nombre del archivo desde la URL o Content-Disposition
     */
    private String getFileName(String contentDisposition, String url) {
        // Intentar obtener del Content-Disposition
        if (contentDisposition != null && contentDisposition.contains("filename=")) {
            String fileName = contentDisposition.substring(contentDisposition.indexOf("filename=") + 9);
            fileName = fileName.replace("\"", "").trim();
            if (fileName.contains(";")) {
                fileName = fileName.substring(0, fileName.indexOf(";"));
            }
            if (!fileName.isEmpty()) {
                // Asegurar extensión .pdf
                if (!fileName.toLowerCase().endsWith(".pdf")) {
                    fileName += ".pdf";
                }
                return fileName;
            }
        }

        // Si no, extraer de la URL
        String urlPart = url.substring(url.lastIndexOf("/") + 1);
        if (urlPart.contains("?")) {
            urlPart = urlPart.substring(0, urlPart.indexOf("?"));
        }
        if (urlPart.isEmpty() || !urlPart.contains(".")) {
            urlPart = "documento.pdf";
        }
        // Asegurar extensión .pdf
        if (!urlPart.toLowerCase().endsWith(".pdf")) {
            urlPart += ".pdf";
        }
        return urlPart;
    }
}