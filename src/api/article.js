const articleList = [
    {
        id: 1,
        slug: "con-mua-bang-gia",
        title: "Cơn mưa băng giá",
        content: "Này mùa đông ơi xin hãy...",
    },
    {
        id: 2,
        slug: "nang-am-xa-dan",
        title: "Nắng ấm xa dần",
        content: "Nắng ấm xa dần rồi, xa dần rồi",
    },
    {
        id: 3,
        slug: "con-mua-ngang-qua",
        title: "Cơn mưa ngang qua",
        content: "Cơn mưa mang em đi xa, ú u ù",
    }
]

export const getArticleListApi = () =>
    new Promise((resolve, reject) => {
        console.log("getArticleListApi")

        setTimeout(() => resolve(articleList), 3000);
    });