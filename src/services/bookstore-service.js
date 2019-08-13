export default class BookStoreService {

    data = [
        {
            id: 1,
            title: 'Production Ready Microservices',
            author: 'Susan J. Fowler'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Negard'
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
            }, 1000);

            // reject(new Error('Something bad happened!'));
        })
    }
}