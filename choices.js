
        <script src="/choices.min.js"></script>
  <link rel="stylesheet" href="fonts.css">
  <link rel="stylesheet" href="style.css">

<select class="form-control"  name="choices-basic" id="choices-basic">
        <option value="apple">apple</option>
        <option value="orange">orange</option>
        <option value="apple">apple</option>
        <option value="orange">orange</option>
      </select>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
          const choicesBasic = new Choices('#choices-basic');
    })
  </script>
.choices {
  width: 176px;
}

.choices__inner {
  border-radius: 10px;
  font-size: 14px;
  background-color: #ffffff;
  border: none;
}

.is-open.is-flipped .choices__inner {
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #CCB26E;
}


