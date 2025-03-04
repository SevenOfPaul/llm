export default function Query(req,keys) {
    const {searchParams} = new URL(req.url);
    let query = {}
    for(const key of keys){
      query[key] = searchParams.get(key)
    }
    return query;
}