import _ from 'underscore';


var search = {

  active_filters : [
    'first_name',
    'last_name',
    'email'
  ],

  results : [],

  init: () => {
    search.bindEvents();
  },

  bindEvents : () => {

    // $('form input').on('keyup', () => {
    //   search.doCall();
    // });

    $('form').on('submit', (e) => {
      e.preventDefault();
      search.doCall();
    });


    $('body').on('click', 'li', function(e) {
      // search.showDetails(element);
      $(this).find('.user--info').stop(true,false).slideToggle(200);
    });

  },

  doCall : () => {
    $.getJSON(
      'users.json', //MOVE!
      (data) => {
        search.results = data;
        search.filterResults()
      }
    )
  },

  filterResults : (res) => {
    var results = search.results;
    _.each(search.active_filters, (filter) => {
      results = _.filter(results, (item) => {
        return item[filter].indexOf($('.' + filter).val().toLowerCase()) > -1
      });
    })


    search.renderUsers(results)

  },

  renderUsers: (users) => {
    var mrk = '';
    _.each(users, (user) => {
      mrk += `<li>
            <div class='user--picture'>
              <img src='${user.photo_url}'>
            </div>
            <div class='user--details'>
              <h3>${user.display_name}</h3>
              <p>${user.email}</p>
            </div>
          <div class='user--info'>
            <p>${user.bio}</p>
          </div>
      </li>`
    });
    $('.results ul').empty().append(mrk);

  }

};




export { search }
