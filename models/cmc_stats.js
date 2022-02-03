const connect = require('../db_connect')

const cmc_stat_list = (callback) => {
    return connect.query(
        "SELECT " +
        "cmc_stat_id, cmc_tvl_count, record_time " +
        "FROM cmc_stats " +
        "WHERE deleted_at IS NULL",
        [],
        callback)
}



const create_cmc_stat= ({ cmc_tvl_count,record_time }, callback) => {
    return connect.query(
        "INSERT INTO cmc_stats (cmc_tvl_count,record_time, created_at) VALUES (?,?, CURRENT_TIMESTAMP)",
        [
            cmc_tvl_count,
            record_time
        ],
        callback)
}



module.exports = {
    cmc_stat_list,
    create_cmc_stat,
   
}