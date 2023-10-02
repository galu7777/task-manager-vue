import Swal from 'sweetalert2'
import { apiChangePassword, apiPutUser } from '../api/users'
import store from '../store';
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

  export const changeNameUserSwal = (user, token) => {
    return new Promise(async (resolve, reject) => {
      try {
        const nick_name = store.state.userData.user.nick_name
        const result = await Swal.fire({
          title: 'Deseas cambiar el nombre de usuario.',
          text: `Estás seguro que deseas cambiar el nombre de usuario "${nick_name}"?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, Cambiar'
        });
        
        if (result.isConfirmed) {
          const resp = await apiPutUser(user, token)
          const newName = resp.data.data.nick_name
          console.log(newName)
          Swal.fire(
            'Cambio de nombre de usuario exitoso!',
            `Tu nombre de usuario fue cambiado exitosamente, por: "${newName}".`,
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