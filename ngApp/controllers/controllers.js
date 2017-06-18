var tokentester;
(function (tokentester) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(jwtHelper) {
                this.jwtHelper = jwtHelper;
                this.adminToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYmYiOjE0OTYxODU1NTYsImV4cCI6MTQ5NzQ3OTA3OCwiaXNzIjoiaHR0cHM6Ly9pc3N1ZXIuY29kZXJjYW1wcy5jb20iLCJhdWQiOlsiaHR0cHM6Ly9hdWQuY29kZXJjYW1wcy5jb20vcmVzb3VyY2VzIiwibG1zLWFwaSJdLCJjbGllbnRfaWQiOiJzb3MuZXhldGVybG1zLmNvbSIsImNsaWVudF9jbGllbnQtc2VjIjoibG1zLnN5c3RlbS5zZXJ2aWNlcyIsInN1YiI6ImI0M2I3M2JiLWFkZTEtNGY3Ny04Y2M4LTMyNmYxNTg0MGI2MSIsImF1dGhfdGltZSI6MTQ5NjE4NTU1NCwiaWRwIjoibG9jYWwiLCJ1c2VyLXNlYyI6WyJsbXMudXNlci5nZW5lcmFsIiwibG1zLnVzZXIuYWRtaW4iLCJsbXMudXNlci5pbnN0cnVjdG9yIiwibG1zLnVzZXIuc3VwcG9ydCIsImxtcy51c2VyLnN0dWRlbnQiXSwiZW1haWwiOiJzdHVkZW50LmVtYWlsQHNvbWVwbGFjZS5jb20iLCJnaXZlbl9uYW1lIjoiSW5zdHJ1Y3RvciIsImZhbWlseV9uYW1lIjoiRG9laW5zdGllbiIsInByZWZlcnJlZF91c2VybmFtZSI6Imluc3RydWN0b3IxIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwibG1zLXNlcnZpY2VzIl0sImFtciI6WyJwd2QiXSwianRpIjoiMGQxOWU0ZDItZDMyZS00ZDllLWExY2UtNWYxY2QwYzEwNDY4IiwiaWF0IjoxNDk3NDc1NDc4fQ.kfbz0SL7B0-15bTW6_KcW-Q25TAI7vO8DnwypemY064";
                this.studentToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYmYiOjE0OTYxODU1NTYsImV4cCI6MTQ5NzU2MDMyNCwiaXNzIjoiaHR0cHM6Ly9pc3N1ZXIuY29kZXJjYW1wcy5jb20iLCJhdWQiOlsiaHR0cHM6Ly9hdWQuY29kZXJjYW1wcy5jb20vcmVzb3VyY2VzIiwibG1zLWFwaSJdLCJjbGllbnRfaWQiOiJzb3MuZXhldGVybG1zLmNvbSIsImNsaWVudF9jbGllbnQtc2VjIjoibG1zLnN5c3RlbS5zZXJ2aWNlcyIsInN1YiI6ImI0M2I3M2JiLWFkZTEtNGY3Ny04Y2M4LTMyNmYxNTg0MGI2MSIsImF1dGhfdGltZSI6MTQ5NjE4NTU1NCwiaWRwIjoibG9jYWwiLCJ1c2VyLXNlYyI6WyJsbXMudXNlci5nZW5lcmFsIiwibG1zLnVzZXIuc3R1ZGVudCJdLCJlbWFpbCI6InN0dWRlbnQuZW1haWxAc29tZXBsYWNlLmNvbSIsImdpdmVuX25hbWUiOiJTdHVkZW50IiwiZmFtaWx5X25hbWUiOiJJbmV4cGVyaWVuY2VkIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic3R1ZGVudGNjIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwibG1zLXNlcnZpY2VzIl0sImFtciI6WyJwd2QiXSwianRpIjoiYWE0NjRlZWYtMDJmYi00OGM2LTg5NDctOGIzNWFmNzYxOGRlIiwiaWF0IjoxNDk3NTU2NzI0fQ.TuP0PW4H8BG0Oiw5oXr6qEQOUwW1w_ySdii3dIzZJQo";
                this.decodedToken = jwtHelper.decodeToken(this.studentToken);
                console.log(this.decodedToken);
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = tokentester.Controllers || (tokentester.Controllers = {}));
})(tokentester || (tokentester = {}));
