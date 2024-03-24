/*
 * @Author: Vincent Yang
 * @Date: 2024-03-24 02:27:44
 * @LastEditors: Vincent Yang
 * @LastEditTime: 2024-03-24 02:34:00
 * @FilePath: /RemoveRelated/content.js
 * @Telegram: https://t.me/missuo
 * @GitHub: https://github.com/missuo
 *
 * Copyright © 2024 by Vincent, All Rights Reserved.
 */

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      const divToRemove = document.querySelector("div.mt-lg.border-t.pt-lg");
      if (divToRemove) {
        divToRemove.remove();
      }
    }
  });
});

const config = {
  childList: true,
  subtree: true,
};

observer.observe(document.body, config);
