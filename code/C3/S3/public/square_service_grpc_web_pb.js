'use strict';

/**
 * @fileoverview gRPC-Web generated client stub for squarerpc_service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.squarerpc_service = require('./square_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.squarerpc_service.SquareServiceClient = function (hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.squarerpc_service.SquareServicePromiseClient = function (hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.squarerpc_service.Message,
 *   !proto.squarerpc_service.Message>}
 */
const methodInfo_SquareService_square = new grpc.web.AbstractClientBase.MethodInfo(proto.squarerpc_service.Message,
/** @param {!proto.squarerpc_service.Message} request */
function (request) {
  return request.serializeBinary();
}, proto.squarerpc_service.Message.deserializeBinary);

/**
 * @param {!proto.squarerpc_service.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.squarerpc_service.Message)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.squarerpc_service.Message>|undefined}
 *     The XHR Node Readable Stream
 */
proto.squarerpc_service.SquareServiceClient.prototype.square = function (request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ + '/squarerpc_service.SquareService/square', request, metadata || {}, methodInfo_SquareService_square, callback);
};

/**
 * @param {!proto.squarerpc_service.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.squarerpc_service.Message>}
 *     A native promise that resolves to the response
 */
proto.squarerpc_service.SquareServicePromiseClient.prototype.square = function (request, metadata) {
  return this.client_.unaryCall(this.hostname_ + '/squarerpc_service.SquareService/square', request, metadata || {}, methodInfo_SquareService_square);
};

module.exports = proto.squarerpc_service;