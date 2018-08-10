import swal from 'sweetalert';

function bindSweetAlertButtonDemo() {
  const swalButtons = document.querySelectorAll('a.card-delete');

  // protect other pages
    swalButtons.forEach( (button)=> {
      button.addEventListener('click', (event) => {
        // if (!confirm("Are you sure you want to delete?")) {
        //   event.preventDefault();
        // }
        event.preventDefault();
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to drink it anymore!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        });
      })
    });
}

export { bindSweetAlertButtonDemo };

