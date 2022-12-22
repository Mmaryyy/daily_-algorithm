function solution(id_pw, db) {
    // id_pw = ['id', 'pw']
    // db = [['id1', 'pw1'], ['id2', 'pw2'], ['id3', 'pw3']]
    // id, pw 모두 같으면 login
    // id 없으면 fail
    // id는 같은데 비밀번호 없으면 wrong pw
    let [inputId, inputPw] = id_pw

    for (let i = 0; i < db.length; i++) {
        if (db[i][0] === inputId) {
            if (db[i][1] === inputPw) return 'login'
            return 'wrong pw'
        }
    }

    return 'fail'
}