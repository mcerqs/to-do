// URL Base https://api.github.com/users/mcerqs

// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/mcerqs');
// xhr.send(null);

// xhr.onreadystatechange = function() {
//   if(xhr.readyState === 4) {
//     console.log(JSON.parse(xhr.responseText));
//   }
// }

// Usando/Trabalhando com Promise
// var minhaPromise = function() {
//   return new Promise(function(resolve, reject) {
//     var xhr = new XMLHttpRequest();
    
//     xhr.open('GET', 'https://api.github.com/users/mcerqs');
//     xhr.send(null);

//     xhr.onreadystatechange = function() {
//       if(xhr.readyState === 4) {
//         if(xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         } else {
//           reject('Erro na requisição');
//         }
//       }
//     }
//   });
// }

// minhaPromise()
//   .then(function(reponse) {
//     console.log(reponse);
//     var avatar = reponse.avatar_url, login = reponse.login;

//     console.log('Login: ', login);
//     console.log('Avart URL: ', avatar);
//   })
//   .catch(function(error) {
//     console.warn(error);
//   });


// Usando axios
axios.get('https://api.github.com/users/mcerqs')
  .then(function(reponse) {
    console.log(reponse);
    var avatar = reponse.data.avatar_url, login = reponse.data.login;

    console.log('Login: ', login);
    console.log('Avart URL: ', avatar);
  })
  .catch(function(error) {
    console.warn(error);
  });