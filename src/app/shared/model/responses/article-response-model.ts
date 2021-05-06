export interface ArticleResponseModel {
    articleId: number,
    title: string,
    content: string,
    image: string,
    roomPrice: number,
    description: string,
    createTime: number,
    lastUpdateTime: number,
    expDate: null,
    vip: boolean,
    status: string,
    acreage: number,
    address: string,
    countLike: string,
    liked: boolean,
    pages: number,
    amount: number,
    video: string,
    type: string,
    price: number,
    service: {
      serviceId: number,
      waterPrice: number,
      electricPrice: number,
      wifiPrice: number,
    },
    roommate: {
      roommateId: number,
      gender: boolean,
      quantity: number,
      description: string,
    },
    customer: { // người cho thuê
      customerId: number,
      name: string,
      email: string,
      phone: string,
      image: string,
    },
    moderator: null,
    location: {
      wardName: string,
      districtId: number,
      districtName: string,
      cityName: string,
      wardId: number,
      cityId: number,
    }
}