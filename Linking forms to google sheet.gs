<form action="https://sheetdb.io/api/v1/4gr1vvqexxsdp" method="POST" id="sheetdb-form">
  Name: <input name="data[name]">
  Email: <input name="data[email]">
  <button type="submit">Submit</button>
</form>

<script>
  var form = document.getElementById('sheetdb-form');
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
      // you can put any JS code here
      alert('success')
    });
  });
</script>
