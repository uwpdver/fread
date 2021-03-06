import React from "react";

export enum ViewType {
  list = 'LIST',
  magazine = 'MAGZ',
  threeway = '3WAY',
  card = 'CARD',
}

export enum FeedThumbnailDisplayType {
  alwaysNotDisplay = "ALWAYS_NOT_DISPLAY",
  displayWhenThumbnaillExist = "DISPLAY_WHEN_THUMBNAIL_EXIST",
  alwaysDisplay = "ALWAYS_DISPLAY",
}

export interface FeedSetting {
  feedThumbnailDisplayType?: FeedThumbnailDisplayType | string;
  unreadOnly: boolean;
}

export interface subscriptionSetting {
  isIconDisplay: boolean;
}

export interface SettingState {
  feed: FeedSetting;
  subscription: subscriptionSetting;
  layout: {
    viewType: ViewType;
  };
  isDarkMode: boolean;
}

export const initSetting:SettingState = {
  feed: {
    feedThumbnailDisplayType: FeedThumbnailDisplayType.alwaysNotDisplay,
    unreadOnly: true,
  },
  subscription: {
    isIconDisplay: false
  },
  layout: {
    viewType: ViewType.card
  },
  isDarkMode: false,
};

export const SettingContext =
  React.createContext<SettingState>(initSetting);
