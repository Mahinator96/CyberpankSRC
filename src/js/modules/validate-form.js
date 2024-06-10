(function() {
  const classForm = '.win__form';

  const form = document.querySelector(classForm);
  const validate = new JustValidate(form, {});


  validate
  .addField(
    '#name', 
    [
      {rule: 'required', errorMessage: 'Введите ваше имя'}, 
      {rule: 'customRegexp', value: /[а-яА-ЯёЁ]+/gi, errorMessage: 'Используйте только кириллица'}
    ], 
    {
      errorsContainer: document.querySelector('.error-container--name'),
      tooltip: {
        position: 'right',
      },
    }
  )
  .addField(
    '#email',
    [ {rule: 'required', errorMessage: 'Введите ваш e-mail'}, 
      {rule: 'email', errorMessage: 'Введите email корректно'}
    ], 
    {
      errorsContainer: document.querySelector('.error-container--email'),
    }
    )
  .addField(
    '#file', 
    [
      {rule: 'minFilesCount', value: 1, errorMessage: 'Загрузите скриншот'},
      {
        rule: 'files',
        value: {
          files: {
            extensions: ['jpeg', 'png', 'pdf'],
            types: ['image/jpeg', 'image/png', 'image/pdf'],
          },
        },
      },
    ],
    {
      errorsContainer: document.querySelector('.error-container.error-container--file'),
    }
    )
  .addField(
    '#data', 
    [
      {rule: 'required', errorMessage: 'Обязательный пункт'}
    ],
    {
      errorsContainer: document.querySelector('.error-container.error-container--check'),
    }
  )
}())