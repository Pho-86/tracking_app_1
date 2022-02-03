const connect = require('../db_connect')

const current_stat_list = (callback) => {
    return connect.query(
        "SELECT *" +
        "FROM current_stats " ,
        [],
        callback)
}
const update_current_cmc_stat = (data, callback) => {

    let {
        key_value,
        record_time,
        
    } = data
    
    return connect.query(
        "UPDATE " +
        "   current_stats SET key_value=?, record_time=?, updated_at=CURRENT_TIMESTAMP " +
        "WHERE " +
        "   key_name ='cmc_tvl'",
        [key_value, record_time],
        callback)
}
const update_current_fbl_stat = (data, callback) => {

    let {
        key_value,
        record_time,
        
    } = data
    
    return connect.query(
        "UPDATE " +
        "   current_stats SET key_value=?, record_time=?, updated_at=CURRENT_TIMESTAMP " +
        "WHERE " +
        "   key_name ='facebook_like'",
        [key_value, record_time],
        callback)
}
const update_current_fbf_stat = (data, callback) => {

    let {
        key_value,
        record_time,
        
    } = data
    
    return connect.query(
        "UPDATE " +
        "   current_stats SET key_value=?, record_time=?, updated_at=CURRENT_TIMESTAMP " +
        "WHERE " +
        "   key_name ='facebook_follower'",
        [key_value, record_time],
        callback)
}
const update_current_tw_stat = (data, callback) => {

    let {
        key_value,
        record_time,
        
    } = data
    
    return connect.query(
        "UPDATE " +
        "   current_stats SET key_value=?, record_time=?, updated_at=CURRENT_TIMESTAMP " +
        "WHERE " +
        "   key_name ='twitter_follower'",
        [key_value, record_time],
        callback)
}
module.exports = {
    current_stat_list,
    update_current_cmc_stat,
    update_current_tw_stat,
    update_current_fbf_stat,
    update_current_fbl_stat

}