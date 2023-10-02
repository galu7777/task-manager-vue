import Swal from 'sweetalert2'
import { apiChangePassword } from '../api/users'
// import store from '../store'

export const changePasswordSwal = (password, token) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Swal.fire({
          title: 'Estás seguro que deseas cambiar la contraseña?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, Cambiar'
        });
        
        if (result.isConfirmed) {
          // Cambia la contraseña usando apiChangePassword
          const resp = await apiChangePassword(password, token);
          Swal.fire(
            'Cambio de Contraseña Exitoso!',
            'Tu contraseña fue cambiada exitosamente.',
            'success'
          );
          resolve(resp);
        } else {
          reject(new Error('Cambio de contraseña cancelado'));
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  

export const changePasswordErrorSwal = () => {
    Swal.fire({
        title: `Contraseña Invalida`,
        text: 'Verifica que tu contraseña sea la correcta',
        icon: 'error'
      })
}