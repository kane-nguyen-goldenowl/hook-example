const articleList = [
    {
        id: 1,
        slug: "a",
    },
    {
        id: 2,
        slug: "b"
    },
    {
        id: 3,
        slug: "c"
    }
]

export const getArticleListApi = () =>
    new Promise((resolve, reject) => {
        console.log("getArticleListApi")

        setTimeout(() => resolve(articleList), 3000);
    });