
var taskApp = new Vue({
  el: '#taskApp',
  data: {
    tasks: [
      {
        title: 'Fare i compiti',
        done: false
      },
      {
        title: 'Fare la spesa',
        done: false
      },
      {
        title: 'Fare il bucato',
        done: false
      }
    ]
  },
  methods: {
    addTask: function(e) {
      e.preventDefault();
      this.tasks.push({
        title: this.tasks.title,
        done: false
      });
    this.tasks.title = '';
    },
    deleteTask: function(task) {
      this.tasks.splice(
        this.tasks.indexOf(task),1
      )
    }
  }
});
