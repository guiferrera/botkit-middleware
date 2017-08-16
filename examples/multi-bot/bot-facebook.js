/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var Botkit = require('botkit');

var controller = Botkit.facebookbot({
  access_token: process.env.EAADSVgJ8cswBAMz11YyPc5hZBmpFJsXZBxInJShJmbouc8CJbzqRfgs2qZBDA7wZAQbkWbzt2GN5PxcybCWh4VADkrqvnpM4lrqEDymdchBlONFo3ZCUTwhqDhq1stZCyZCZBWZBKNWqXnPzEXlv26dq4oi9hFUWBFUZCMapS4FBmtbWF3i5PAYXr3,
  verify_token: process.env.EAADSVgJ8cswBAMz11YyPc5hZBmpFJsXZBxInJShJmbouc8CJbzqRfgs2qZBDA7wZAQbkWbzt2GN5PxcybCWh4VADkrqvnpM4lrqEDymdchBlONFo3ZCUTwhqDhq1stZCyZCZBWZBKNWqXnPzEXlv26dq4oi9hFUWBFUZCMapS4FBmtbWF3i5PAYXr3
});

var bot = controller.spawn();
controller.hears('(.*)', 'message_received', function(bot, message) {
  bot.reply(message, message.watsonData.output.text.join('\n'));
});

module.exports.controller = controller;
module.exports.bot = bot;
