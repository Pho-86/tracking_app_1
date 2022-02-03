const connect = require('../db_connect')

const twitter_stat_list = (callback) => {
    return connect.query(
        "SELECT " +
        "tw_stat_id, tw_follower_count, record_time " +
        "FROM twitter_stats " +
        "WHERE deleted_at IS NULL",
        [],
        callback)
}



const create_twitter_stat= ({ tw_follower_count,record_time }, callback) => {
    return connect.query(
        "INSERT INTO twitter_stats (tw_follower_count,record_time, created_at) VALUES (?, ?,CURRENT_TIMESTAMP)",
        [
            tw_follower_count,
            record_time
        ],
        callback)
}



module.exports = {
    twitter_stat_list,
    create_twitter_stat
   
}