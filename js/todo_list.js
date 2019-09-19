site = {};
site.todo = {};
site.todo.remove = function () {

    $('ul').on('click', 'li', function () {
        $(this).toggleClass('completed');
        store();
    });

    $('ul').on('click', '.icon', function (event) {
        $(this).parent().fadeOut('slow', function () {
            $(this).remove();
            store();
        });
        event.stopPropagation();
    })

    $('#task-input').keypress(function (event) {
        if (event.which === 13) {
            let todoItem = $(this).val().trim();
            $('#task-input').val('');
            if (todoItem !== '') {
                $(this).val('');
                $('ul').append('<li class="tasks">' + todoItem + '<span class="icon"><i class="fas fa-trash-alt"></i></span>' + '</li>');
                store();
            }
        }
    })
    $('#add-btn').click(function () {
        let todoItem = $('#task-input').val().trim();
        $('#task-input').val('');
        if (todoItem !== '') {
            $('#task-input').val('');
            $('ul').append('<li class="tasks">' + todoItem + '<span class="icon"><i class="fas fa-trash-alt"></i></span>' + '</li>');
            store();
        }
    })

    function store() {
        window.sessionStorage.myitems = $('#list').html();
    }

    function getValues() {
        let storedValues = window.sessionStorage.myitems;
        if (!storedValues) {
            $('#list').html('<li class="tasks">' + todoItem + '<span class="icon"><i class="fas fa-trash-alt"></i></span>' + '</li>');
        } else {
            $('#list').html(storedValues);
        }
    }

    getValues();
}
$(document).ready(function () {
    site.todo.remove();
});