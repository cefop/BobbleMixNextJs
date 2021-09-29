import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const UserCookiesToast = MySwal.mixin({
    toast: true,
    icon: 'warning',
    position: 'bottom-end',
    showConfirmButton: true,
    background: '#1D1D1B',
    confirmButtonText: 'Autoriser',
    confirmButtonColor: 'orange',
    showDenyButton: true,
    denyButtonColor: 'orangered',
    denyButtonText: `Décliner`,
});

export const Toast = MySwal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
});

export const ConfimThis = MySwal.mixin({
    background: '#ffffff',
    confirmButtonText: 'voir la recette',
    confirmButtonColor: 'orange',
    showDenyButton: true,
    denyButtonColor: 'orangered',
    denyButtonText: `rester sur cette page`,
    // showCancelButton: true,
    // cancelButtonText: 'faire une autre recette',
    // cancelButtonColor: 'gray',
    reverseButtons: true,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
});
