'use strict';

const Joi = require('joi');
const descriptions = require('./descriptions.js');

const authorSchema = Joi.object().keys({
  name: Joi.string().description(descriptions.author[1].name),
  url: Joi.string().uri().description(descriptions.author[1].url),
  avatar: Joi.string().uri().description(descriptions.author[1].avatar)
});

const itemsSchema = Joi.object().keys({
  id: Joi.string().uri().description(descriptions.items[1].id),
  url: Joi.string().uri().description(descriptions.items[1].url),
  external_url: Joi.string().uri().description(descriptions.items[1].external_url),
  title: Joi.string().description(descriptions.items[1].title),
  content_html: Joi.string().description(descriptions.items[1].content_html),
  content_text: Joi.string().description(descriptions.items[1].content_text),
  summary: Joi.string().description(descriptions.items[1].summary),
  image: Joi.string().uri().description(descriptions.items[1].image),
  banner_image: Joi.string().uri().description(descriptions.items[1].banner_image),
  date_published: Joi.string().regex(/^([0-9]{4})-([0-9]{2})-([0-9]{2})([Tt]([0-9]{2}):([0-9]{2}):([0-9]{2})(\\.[0-9]+)?)?(([Zz]|([+-])([0-9]{2}):([0-9]{2})))?/).description(descriptions.items[1].date_published),
  date_modified: Joi.string().regex(/^([0-9]{4})-([0-9]{2})-([0-9]{2})([Tt]([0-9]{2}):([0-9]{2}):([0-9]{2})(\\.[0-9]+)?)?(([Zz]|([+-])([0-9]{2}):([0-9]{2})))?/).description(descriptions.items[1].date_modified),
  author: authorSchema.description(descriptions.author[0]),
  tags: Joi.array().items(Joi.string()).description(descriptions.items[1].tags)
});

const attachmentsSchema = Joi.object().keys({
  url: Joi.string().uri().description(descriptions.attachments[1].url),
  mime_type: Joi.string().description(descriptions.attachments[1].mime_type),
  title: Joi.string().description(descriptions.attachments[1].title),
  size_in_bytes: Joi.number().integer().description(descriptions.attachments[1].size_in_bytes),
  duration_in_seconds: Joi.number().integer().description(descriptions.attachments[1].duration_in_seconds)
}).requiredKeys('mime_type');

const baseSchema = Joi.object().keys({
  version: Joi.string().uri().description(descriptions.version),
  title: Joi.string().description(descriptions.title),
  home_page_url: Joi.string().uri().description(descriptions.home_page_url),
  feed_url: Joi.string().uri().description(descriptions.feed_url),
  description: Joi.string().description(descriptions.description),
  user_comment: Joi.string().description(descriptions.user_comment),
  next_url: Joi.string().uri().description(descriptions.next_url),
  icon: Joi.string().uri().description(descriptions.icon),
  favicon: Joi.string().uri().description(descriptions.favicon),
  author: authorSchema.description(descriptions.author[0]),
  items: Joi.array().items(itemsSchema),
  attachments: Joi.array().items(attachmentsSchema).description(descriptions.attachments[0]),
  expired: Joi.boolean().description(descriptions.expired)
}).requiredKeys('version', 'title', 'items');

// Return result.
const result = Joi.validate({}, baseSchema);
// result.error === null -> valid

// You can also pass a callback which will be called synchronously with the validation result.
Joi.validate({ username: 'abc', birthyear: 1994 }, baseSchema, function (err, value) { });  // err === null -> valid

console.log(result);