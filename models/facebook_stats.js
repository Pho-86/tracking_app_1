const connect = require('../db_connect')

const facebook_stat_list = (callback) => {
    return connect.query(
        "SELECT " +
        "fb_stat_id, fb_like_count, fb_follower_count, record_time  " +
        "FROM facebook_stats " +
        "WHERE deleted_at IS NULL",
        [],
        callback)
}


const create_fbf_stat= ({fb_follower_count,record_time }, callback) => {
    return connect.query(
        "INSERT INTO facebook_stats ( fb_follower_count, created_at) VALUES ( ?,?, CURRENT_TIMESTAMP)",
        [
            
            fb_follower_count,
            record_time
        ],
        callback)
}
const create_fbl_stat= ({ fb_like_count,record_time }, callback) => {
    return connect.query(
        "INSERT INTO facebook_stats (fb_like_count,record_time, created_at) VALUES (?, ?,CURRENT_TIMESTAMP)",
        [
           fb_like_count,
            record_time
        ],
        callback)
}





module.exports = {
    facebook_stat_list,
    create_fbf_stat,
    create_fbl_stat
    
}