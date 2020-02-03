export interface ApiError {
  /**
   * Error code in format /^[0-9]{4}$/
   */
  code: number;
  /**
   * Description for developers
   */
  description: string;
  /**
   * Message to send to client
   */
  message: string;
  /**
   * Http status code
   */
  httpStatus: number;
}
