import {useEffect, useState} from "react";
//src/assets/images에 있는 모든 이미지를 한번에 불러오기 위한 방법입니다.
const imagePaths = import.meta.glob('./assets/gallery/*.{png,jpg,jpeg,svg,webp}');

const Gallery = ({title}) => {
    //접기/펼치기 상태를 유지하기 위한 stateV
    const [isflip, set_isfliep] = useState(true);
    //화면에 표시해줄 이미지를 정하는 부분.
    const [images, set_images] = useState([]);
    //전체 이미지를 저장해줄 stateV. useRef를 사용해서 저장해도됨.
    const [all_images, set_all_images] = useState([]);
    useEffect(() => {
        const loadImages = async () => {
            const imagePromises = Object.entries(imagePaths).map(([path, importImage]) =>
                importImage().then((module) => ({path, src: module.default}))
            );
            const loadedImages = await Promise.all(imagePromises);

            //이미지를 1~18순서로 정렬시키는데, 문자열 기준 정렬이 되지 않게 만드는 코드
            loadedImages.sort((a, b) => {
                let _a = a.path.split("/")
                let _b = b.path.split("/")
                _a = _a[_a.length - 1].split(".")[0]
                _b = _b[_b.length - 1].split(".")[0]
                return parseInt(_a) - parseInt(_b)
            })

            //첫 load시에는 6개의 image를 row = 2, col = 3으로 나눠서 보여줍니다.
            const temp = []
            for (let i = 0; i < 6; i++) {
                temp.push(loadedImages.slice(i * 3, (i + 1) * 3))
            }
            set_images(temp.slice(0, 2));
            set_all_images(temp)
        }
        loadImages();
    }, [])

    const flip_gallery = () => {
        //flip에 따라 row개수를 변경시켜서 images를 변경시켜줌
        const row_cnt = isflip ? 6 : 2;
        set_images([...all_images].slice(0, row_cnt))
        set_isfliep(!isflip)
    }
    return (
        <>
            <h1>{title}</h1>
            {
                [images].map((v, i) => {
                    return (
                        v.map((v2, i2) => {
                            return (
                                <div key={i * 100 + i2 * 10} style={{display: "flex"}}>
                                    {[0, 1, 2].map((v3) => {
                                        const item = v2[v3];
                                        if (!item) return null;
                                        return (
                                            <div key={item.path}
                                                 style={{
                                                     margin: "2%",
                                                     border: "1px solid rgb(230, 224, 255)",
                                                     borderRadius: "12px",
                                                     width: "29%",
                                                     height: "111.896px",
                                                     overflow: "hidden"
                                                 }}>
                                                <img
                                                    src={item.src}
                                                    height="100%"
                                                    width="100%"
                                                    alt="gallery"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            )
                        })
                    )
                })
            }
            <div
                onClick={() => {
                    flip_gallery()
                }}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5px",
                    marginBottom: "20px",
                }}
            >
                {isflip ? "더보기" : "접기"}
            </div>
        </>
    )
}

export default Gallery