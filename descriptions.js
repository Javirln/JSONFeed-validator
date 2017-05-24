module.exports = {
  version: 'It  is the URL of the version of the format the feed uses. This should appear at the very top, though we recognize that not all JSON generators allow for ordering.',
  title: 'It is the name of the feed, which will often correspond to the name of the website (blog, for instance), though not necessarily.',
  home_page_url: 'It is the URL of the resource that the feed describes. This resource may or may not actually be a “home” page, but it should be an HTML page. If a feed is published on the public web, this should be considered as required. But it may not make sense in the case of a file created on a desktop computer, when that file is not shared or is shared only privately.',
  feed_url: 'It is the URL of the feed, and serves as the unique identifier for the feed. As with home_page_url, this should be considered required for feeds on the public web.',
  description: 'It provides more detail, beyond the title, on what the feed is about. A feed reader may display this text.',
  user_comment: 'It is a description of the purpose of the feed. This is for the use of people looking at the raw JSON, and should be ignored by feed readers.',
  next_url: 'It is the URL of a feed that provides the next n items, where n is determined by the publisher. This allows for pagination, but with the expectation that reader software is not required to use it and probably won’t use it very often. next_url must not be the same as feed_url, and it must not be the same as a previous next_url (to avoid infinite loops).',
  icon: 'It is the URL of an image for the feed suitable to be used in a timeline, much the way an avatar might be used. It should be square and relatively large — such as 512 x 512 — so that it can be scaled-down and so that it can look good on retina displays. It should use transparency where appropriate, since it may be rendered on a non-white background.',
  favicon: 'It is the URL of an image for the feed suitable to be used in a source list. It should be square and relatively small, but not smaller than 64 x 64 (so that it can look good on retina displays). As with icon, this image should use transparency where appropriate, since it may be rendered on a non-white background.',
  author: [
    'It specifies the feed author. The author object has several members. These are all optional — but if you provide an author object, then at least one is required.',
    {
      name: 'It is the author\'s name',
      url: 'It is the URL of a site owned by the author. It could be a blog, micro-blog, Twitter account, and so on. Ideally the linked-to page provides a way to contact the author, but that’s not required. The URL could be a mailto: link, though we suspect that will be rare.',
      avatar: 'It is the URL for an image for the author. As with icon, it should be square and relatively large — such as 512 x 512 — and should use transparency where appropriate, since it may be rendered on a non-white background.',
    }
  ],
  expired: 'It says whether or not the feed is finished — that is, whether or not it will ever update again. A feed for a temporary event, such as an instance of the Olympics, could expire. If the value is true, then it’s expired. Any other value, or the absence of expired, means the feed may continue to update.',
  hubs: 'It describes endpoints that can be used to subscribe to real-time notifications from the publisher of this feed. Each object has a type and url, both of which are required. See the section “Subscribing to Real-time Notifications” below for details.',
  items: [
      '',
    {
      id: 'It is unique for that item for that feed over time. If an item is ever updated, the id should be unchanged. New items should never use a previously-used id. If an id is presented as a number or other type, a JSON Feed reader must coerce it to a string. Ideally, the id is the full URL of the resource described by the item, since URLs make great unique identifiers.',
      url: 'It is the URL of the resource described by the item. It’s the permalink. This may be the same as the id — but should be present regardless.',
      external_url: 'It is the URL of a page elsewhere. This is especially useful for linkblogs. If url links to where you’re talking about a thing, then external_url links to the thing you’re talking about.',
      title: 'It is plain text. Microblog items in particular may omit titles.',
      content_html: 'They are each optional strings — but one or both must be present. This is the HTML or plain text of the item. Important: the only place HTML is allowed in this format is in content_html. A Twitter-like service might use content_text, while a blog might use content_html. Use whichever makes sense for your resource. (It doesn’t even have to be the same for each item in a feed.)',
      content_text: 'They are each optional strings — but one or both must be present. This is the HTML or plain text of the item. Important: the only place HTML is allowed in this format is in content_html. A Twitter-like service might use content_text, while a blog might use content_html. Use whichever makes sense for your resource. (It doesn’t even have to be the same for each item in a feed.)',
      summary: 'It is a plain text sentence or two describing the item. This might be presented in a timeline, for instance, where a detail view would display all of content_html or content_text.',
      image: 'It is the URL of the main image for the item. This image may also appear in the content_html — if so, it’s a hint to the feed reader that this is the main, featured image. Feed readers may use the image as a preview (probably resized as a thumbnail and placed in a timeline).',
      banner_image: 'It is the URL of an image to use as a banner. Some blogging systems (such as Medium) display a different banner image chosen to go with each post, but that image wouldn’t otherwise appear in the content_html. A feed reader with a detail view may choose to show this banner image at the top of the detail view, possibly with the title overlaid.',
      date_published: 'It specifies the date in RFC 3339 format. (Example: 2010-02-07T14:04:00-05:00.)',
      date_modified: 'It specifies the modification date in RFC 3339 format.',
      author: 'has the same structure as the top-level author. If not specified in an item, then the top-level author, if present, is the author of the item.',
      tags: 'They can have any plain text values you want. Tags tend to be just one word, but they may be anything. Note: they are not the equivalent of Twitter hashtags. Some blogging systems and other feed formats call these categories.'
    }
  ],
  attachments: [
      'They lists related resources. Podcasts, for instance, would include an attachment that’s an audio or video file. Each attachment has several members:',
    {
      url: 'It specifies the location of the attachment.',
      mime_type: 'It specifies the type of the attachment, such as “audio/mpeg.”',
      title: 'It  is a name for the attachment. Important: if there are multiple attachments, and two or more have the exact same title (when title is present), then they are considered as alternate representations of the same thing. In this way a podcaster, for instance, might provide an audio recording in different formats.',
      size_in_bytes: 'It specifies how large the file is.',
      duration_in_seconds: 'It specifies how long the attachment takes to listen to or watch.'
    }
  ]
};