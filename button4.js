document.getElementById('bookNowButton').addEventListener('click', function() {
    var checkinDate = document.getElementById('checkinDate').value;
    var checkoutDate = document.getElementById('checkoutDate').value;

    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = 'Вы забронировали отель с ' + checkinDate + ' по ' + checkoutDate ;
});
