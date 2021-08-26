
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
          const choicesBasic = new Choices('#choices-basic', {
            shouldSort: false,
            searchEnabled: false,
            duplicateItemsAllowed: false,
            itemSelectText: '',
            position: 'bottom',
          });

    });
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

.choices[data-type*=select-one] .choices__input {
  border-bottom: none;
}

.is-open .choices__inner {
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #CCB26E;
}

.is-open .choices__list--dropdown {
  border-radius: 0 0 10px 10px;
  background-color: #ffffff;
  border: 1px solid #CCB26E;
}

.choices__list--dropdown .choices__item--selectable.is-highlighted {
  background-color: transparent;
}

.choices__input--cloned {
  display: none;
}


