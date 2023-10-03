import http from '../http-common';

class StudentsDataService {
    getAll() {
        return http.get('/Students');
    }

    get(id) {
        return http.get('/Students/' + id);
    }

    create(data) {
        return http.post('/Students', data);
    }

    update(id, data) {
        return http.put('/Students' + id, data);
    }

    delete(id) {
        return http.delete('/Students' + id);
    }

    deleteAll() {
        return http.delete('/Students');
    }

    findByTitle(title) {
        return http.get('/Students?title = ' + title)
    }
}

export default new StudentsDataService();