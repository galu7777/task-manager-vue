import Swal from 'sweetalert2'
import store from '../store'

export const login = (user) => {
    const name = user.data.user.nick_name
    Swal.fire({
        title: `Bienvenido "${name}"`,
      })
}

export const loginError = () => {
    Swal.fire({
        title: `Credenciales Invalidas`,
        text: 'Verifica que tu "contraseña", "nombre de usuario" o "email" sean los correctos',
        icon: 'error'
      })
}

export const errorSwal = (msg) => {
     Swal.fire({
        title: `Ooops a ocurrido un error`,
        text: `${msg}`,
        icon: 'warning',
        confirmButtonText: 'Ok'
     })
}

export const addTaskSwal = (task) => {
    let nameTask = task
    Swal.fire({
        title: 'Registrar Tarea',
        text: `Deseas agregar esta tarea "${nameTask}"`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Registrar'
    }).then((result) => {
        if (result.isConfirmed) {
            store.state.nameTask = nameTask
            store.dispatch('addTaskAction')
            nameTask = ''
            Swal.fire(
            'Registro Exitoso!',
            'Tu tarea fue registrada exitosamente.',
            'success'
            )
        }
    })
}

export const deletedTaskSwal = (index) => {
    Swal.fire({
        title: 'Eliminar Tarea',
        text: `Deseas eliminar esta tarea`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#9b9b9b',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            store.dispatch('deletedTaskAction', index)
            Swal.fire(
            'Tarea Eliminada!',
            `La tarea "${store.state.taskDeleted}" fue eliminada exitosamente.`,
            'success'
            )
        }
    })
}
export const deletedTaskSuccessSwal = (index) => {
    Swal.fire({
        title: 'Eliminar Tarea',
        text: `Deseas eliminar esta tarea`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#9b9b9b',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            store.dispatch('deletedTaskSuccessAction', index)
            Swal.fire(
            'Tarea Eliminada!',
            `La tarea "${store.state.taskDeleted}" fue eliminada exitosamente.`,
            'success'
            )
        }
    })  
}

export const updateTaskNameSwal = (index) => {
    console.log()
    Swal.fire({
        title: 'Actualizar esta tarea ',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Actualizar',
        showLoaderOnConfirm: true,
        preConfirm: (nameTaskNew) => {
            store.state.nameTaskNew = nameTaskNew
            store.dispatch('reNameTask', index)
                
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Modificacion fue Exitosa!',
            'Tu tarea fue registrada exitosamente.',
            'success'
            )
        }
      })
}

export const sigUpSwal = (user) => {
    const newUser = user
    store.state.newUser = user
    Swal.fire({
        title: 'Registrar Nuevo Usuario',
        text: `Deseas registrarte como "${newUser.nick_name}"`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Registrar'
    }).then((result) => {
        if (result.isConfirmed) {
            store.dispatch('userRegister')
            Swal.fire(
            'Registro Exitoso!',
            'Tu Usuario fue registrado exitosamente.',
            'success'
            )
        }
    })
}