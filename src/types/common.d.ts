declare namespace Common {
  type ApiService<T, U = Error> = Promise<
    | { readonly isError: false; readonly value: T }
    | { readonly isError: true; readonly value: U }
  >

  type Video = {
    cover: string
    play_url: string
    title: string
  }
}