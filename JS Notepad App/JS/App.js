
// Adding Cards Event //
document.getElementById('my-form').addEventListener('submit', function (e) {

    e.preventDefault();
    if (document.getElementById('text-area').value === '') {
        showAlert('Please fill in a field!', 'alert alert-danger');
    }
    else {
        var note =
        {
            cardtext: document.querySelector('#text-area').value
        }
        // Local Storage //
        if (localStorage.getItem('notes') === null) {
            var notes = [];
            notes.push(note);
            localStorage.setItem('notes', JSON.stringify(notes));
        }
        else {
            var notes = JSON.parse(localStorage.getItem('notes'));
            notes.push(note);
            localStorage.setItem('notes', JSON.stringify(notes));
        }

        showAlert('Note Added!', 'alert alert-success');
        document.getElementById('text-area').value = '';
    }
    fetchNotes();
});

//Deleting Card//
function removeNote(index) {
    var notes = JSON.parse(localStorage.getItem('notes'));
    notes.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notes));
    fetchNotes();
}

// Searching Card //
document.querySelector('.text-field').addEventListener('keyup', function (e) {
    let card = document.getElementsByClassName('card');
    let textfield = document.querySelector('.text-field').value;
    Array.from(card).forEach(function (element) {
        let cardtext = element.getElementsByTagName('p')[0].innerText;
        if (cardtext.includes(textfield)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    });
});

//Show Alert //
function showAlert(message, ClassName) {
    let divalert = document.createElement('div');
    let here = document.getElementById('alert');
    let form = document.getElementById('my-form');
    divalert.className = ClassName;
    divalert.textContent = message;
    here.insertBefore(divalert, form);
    //Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

// Fetch Notes //
function fetchNotes() {
    let notes = JSON.parse(localStorage.getItem('notes'));
    var cards = document.querySelector('.cards');
    cards.innerHTML = '';
    for (var i = 0; i < notes.length; i++) {

        var col = document.createElement('div');
        var card = document.createElement('div');
        var cardbody = document.createElement('div');
        col.className = 'col-md-4 mt-3';
        card.className = 'card';
        cardbody.className = 'card-body';
        cardbody.innerHTML = `<h5 class="card-title">Note ${i+1}</h5>
                        <p class="card-text">${notes[i].cardtext}</p>
                        <button id="${i}" onclick="removeNote(this.id)" class="btn btn-danger">Delete Note</button>`;
        col.appendChild(card);
        card.appendChild(cardbody);
        cards.appendChild(col);
    }
}