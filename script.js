const URL_SUPABASE='https://iwoaqxecwocbvhbinahx.supabase.co'
const KEY= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3b2FxeGVjd29jYnZoYmluYWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MTk3MjgsImV4cCI6MjA5NTI5NTcyOH0.aBTfzl4wWJIv6uQKCM4G-4gNTlcm-6V7Uqbijjbmg_A'

const supabaseClient = supabase.createClient(URL_SUPABASE,KEY)

async function verificar_login(){
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        return null;
    }

    try {
        const { data, error } = await supabaseClient
            .from('users')
            .select('role')
            .eq('username', email)
            .eq('password', password)
            .single();

        if (error || !data) {
            return null;
        }

        return data.role;
    } catch (error) {
        console.error('Error inesperado: ', error);
        return null;
    }
}


async function cargarUsuarios(){
    try{
        const {data, error} = await supabaseClient.from('users').select('*');
    
        if(error){
            console.error('Error al cargar usuarios: ', error);
            return;
        }

        renderizarusuarios(data);

    }
    catch (error){
    console.error('Error inesperado: ', error);
    }
}


function renderizarusuarios(data){
    const tbody = document.getElementById('table');

    if (!data || data.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-8">
                    No hay usuarios registrados
                </td>
            </tr>
        `;
        return;
    }
    let html = '';
    
    data.forEach(usuario => {
        let rolClase = 'bg-gray-200 text-gray-800';
        let rolEtiqueta = usuario.role || 'Sin rol';
        if (usuario.role === 'Administrador' || usuario.role === 'admin') {
            rolClase = 'bg-blue-100 text-blue-800';
            rolEtiqueta = 'Administrador';
        } else if (usuario.role === 'Estudiante' || usuario.role === 'viewer') {
            rolClase = 'bg-green-100 text-green-800';
            rolEtiqueta = 'Estudiante';
        }
        
        html += `
            <tr class="hover:bg-gray-50 transition-colors group">
                <td class="px-6 py-4 text-gray-900 font-medium">${usuario.id ?? 'Sin ID'}</td>
                <td class="px-6 py-4 text-gray-900">${usuario.nombre || 'Sin nombre'}</td>
                <td class="px-6 py-4 text-gray-900">${usuario.apellido || 'Sin apellido'}</td>
                <td class="px-6 py-4 text-gray-900">${usuario.username || usuario.email || 'Sin correo'}</td>
                <td class="px-6 py-4">
                    <span class="px-3 py-1 rounded-full text-sm font-medium ${rolClase}">
                        ${rolEtiqueta}
                    </span>
                </td>
                <td class="px-6 py-4 text-right space-x-1">
                    <button onclick="editarUsuario(${usuario.id})" class="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Editar">
                        <i class="fas fa-pen-to-square text-[20px]"></i>
                    </button>
                    <button onclick="eliminarUsuario(${usuario.id})" class="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Eliminar">
                        <i class="fas fa-trash-can text-[20px]"></i>
                    </button>
                </td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html;
}

// Función auxiliar para obtener iniciales
function obtenerIniciales(nombre) {
    if (!nombre) return '??';
    const partes = nombre.split(' ');
    if (partes.length === 1) return partes[0].substring(0, 2).toUpperCase();
    return (partes[0][0] + partes[1][0]).toUpperCase();
}

async function editarUsuario(id) {
    try {
        const { data, error } = await supabaseClient
            .from('users')
            .select('id, nombre, apellido, username, role')
            .eq('id', id)
            .single();

        if (error) {
            console.error('Error cargando usuario:', error);
            alert('No se pudo cargar el usuario');
            return;
        }

        document.getElementById('edit-user-id').value = data.id;
        document.getElementById('edit-user-nombre').value = data.nombre ?? '';
        document.getElementById('edit-user-apellido').value = data.apellido ?? '';
        document.getElementById('edit-user-correo').value = data.username ?? '';
        document.getElementById('edit-user-password').value = '';
        const roleValue = data.role === 'Administrador' ? 'admin' : data.role === 'Estudiante' ? 'viewer' : (data.role || 'viewer');
        document.getElementById('edit-user-role').value = roleValue;

        document.getElementById('user-modal').classList.remove('hidden');
    } catch (error) {
        console.error('Error inesperado al cargar el usuario:', error);
        alert('Error al abrir el modal de edición');
    }
}

function cerrarModal() {
    document.getElementById('user-modal').classList.add('hidden');
}

function abrirModalNuevoUsuario() {
    document.getElementById('new-user-nombre').value = '';
    document.getElementById('new-user-apellido').value = '';
    document.getElementById('new-user-correo').value = '';
    document.getElementById('new-user-password').value = '';
    document.getElementById('new-user-role').value = 'admin';
    document.getElementById('new-user-modal').classList.remove('hidden');
}

function cerrarModalNuevoUsuario() {
    document.getElementById('new-user-modal').classList.add('hidden');
}

async function guardarNuevoUsuario(event) {
    event.preventDefault();

    const nombre = document.getElementById('new-user-nombre').value.trim();
    const apellido = document.getElementById('new-user-apellido').value.trim();
    const username = document.getElementById('new-user-correo').value.trim();
    const password = document.getElementById('new-user-password').value;
    const role = document.getElementById('new-user-role').value;

    if (!nombre || !apellido || !username || !password || !role) {
        alert('Completa todos los campos para crear el usuario');
        return;
    }

    try {
        const { error } = await supabaseClient
            .from('users')
            .insert([{ nombre, apellido, username, password, role }]);

        if (error) {
            console.error('Error al crear usuario:', error);
            alert('No se pudo crear el usuario');
            return;
        }

        alert('Usuario creado correctamente');
        cerrarModalNuevoUsuario();
        cargarUsuarios();
    } catch (error) {
        console.error('Error inesperado al crear usuario:', error);
        alert('Ocurrió un error al crear el usuario');
    }
}

async function guardarCambiosUsuario(event) {
    event.preventDefault();

    const id = document.getElementById('edit-user-id').value;
    const nombre = document.getElementById('edit-user-nombre').value.trim();
    const apellido = document.getElementById('edit-user-apellido').value.trim();
    const username = document.getElementById('edit-user-correo').value.trim();
    const password = document.getElementById('edit-user-password').value;
    const role = document.getElementById('edit-user-role').value.trim();

    if (!id) {
        alert('No se encontró el usuario a editar');
        return;
    }

    const updateData = { nombre, apellido, username, role };
    if (password) {
        updateData.password = password;
    }

    try {
        const { error } = await supabaseClient
            .from('users')
            .update(updateData)
            .eq('id', id);

        if (error) {
            console.error('Error al guardar cambios:', error);
            alert('No se pudieron guardar los cambios');
            return;
        }

        alert('Usuario actualizado correctamente');
        cerrarModal();
        cargarUsuarios();
    } catch (error) {
        console.error('Error inesperado al guardar cambios:', error);
        alert('Ocurrió un error al guardar los cambios');
    }
}

async function eliminarUsuario(id) {
    if (!confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
        return;
    }
    
    try {
        const { error } = await supabaseClient
            .from('users')
            .delete()
            .eq('id', id);
        
        if (error) {
            console.error('Error al eliminar:', error);
            alert('Error al eliminar usuario');
            return;
        }
        
        alert('Usuario eliminado exitosamente');
        cargarUsuarios(); // Recargar la tabla
        
    } catch (error) {
        console.error('Error:', error);
        alert('Error al eliminar usuario');
    }
}

cargarUsuarios();