import apiClient from "../utils/api-client";

export function addToCartAPI(id, quantity) {
  return apiClient.post(`/cart/${id}`, { quantity });
}

export function getCartAPI() {
  return apiClient.get("/cart");
}

export function removeFromCartAPI(id){
  apiClient.patch(`/cart/remove/${id}`)
}

export function increaseCartAPI(id){
  apiClient.patch(`/cart/increase/${id}`)
}

export function decreaseCartAPI(id){
  apiClient.patch(`/cart/decrease/${id}`)
}