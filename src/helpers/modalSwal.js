import Swal from 'sweetalert2'

const addTaskSwal = () => {
    Swal.fire({
        title: 'Registrar Tarea',
        text: `Deseas agregar esta tarea "${this.nameTask}"`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Registrar'
    }).then((result) => {
        if (result.isConfirmed) {
            this.$store.state.nameTask = this.nameTask
            this.$store.dispatch('addTaskAction')
            this.nameTask = ''
            Swal.fire(
            'Registro Exitoso!',
            'Tu tarea fue registrada exitosamente.',
            'success'
            )
        }
    })
}

const deletedTaskSwal = () => {
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
            this.$store.dispatch('deletedTaskAction')
            Swal.fire(
            'Tarea Eliminada!',
            `La tarea "${this.$store.state.taskDeleted}" fue eliminada exitosamente.`,
            'success'
            )
        }
    })
}

const deletedTaskSuccessSwal = () => {
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
            this.$store.dispatch('deletedTaskSuccessAction')
            Swal.fire(
            'Tarea Eliminada!',
            `La tarea "${this.$store.state.taskDeleted}" fue eliminada exitosamente.`,
            'success'
            )
        }
    })  
}

export default {
    addTaskSwal,
    deletedTaskSwal,
    deletedTaskSuccessSwal
}

