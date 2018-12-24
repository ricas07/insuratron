window.onload = function onLoad() {
    function handleCarNumbers() {
        var autoContainers = document.getElementsByClassName('auto-container');
        for (var i = 0; i < autoContainers.length; i++) {
            var carNumberSpan = autoContainers[i].getElementsByClassName('auto-number');
            carNumberSpan[0].innerHTML = i + 1;
        }
    }

    var addACarLink = document.getElementById('add-a-car');
    addACarLink.addEventListener('click', function(e) { // eslint-disable-line
        e.preventDefault();
        var autosContainers = document.getElementsByClassName('autos-container');
        var autoContainer = document.getElementsByClassName('auto-container');
        var newContainer = autoContainer[0].cloneNode(true);
        autosContainers[0].append(newContainer);
        handleCarNumbers()
    });

    var quoteForm = document.getElementById('auto-quote-form');
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        var data = $(quoteForm).serialize();
        console.log(data);
        $.post('/submit-form', data)
            .done((res) => {
                $(quoteForm).trigger('reset');
                var successMessage = document.getElementById('form-success-message');
                successMessage.classList.remove('hidden');
            });
    });

    handleCarNumbers();
};
