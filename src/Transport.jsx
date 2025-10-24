const Transport  = ({tr_type}) => {
    var rev_tr_type = tr_type
    var contents = "";
    if (tr_type ==="bus") {
        rev_tr_type = "버스"
        contents = `간선버스(파랑색)<br/>
109, 171, 272, 601, 606, 710<br/>
지선버스(녹색)<br/>
1020, 7025`
    } else if (tr_type === "metro") {
        rev_tr_type = "지하철"
        contents = `3호선 경복궁역 5번 출구<br/>
도보 2분`
    } else if (tr_type === "car") {
        rev_tr_type = "자동차"
        contents = `내비게이션<br/>
경복궁 또는 경복궁주차장`
    }

    return  (
        <div>
            <div style = {{fontSize : "16px"}}>
                {rev_tr_type}로 오시는 분들
            </div>
            <div style = {{fontSize : "12px"}}>
                <div dangerouslySetInnerHTML={{ __html: contents }} />
            </div>
            <br/>
        </div>
    )}

export default Transport