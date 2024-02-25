import {
  BookMarkIcon,
  BookMarkIcon2,
  CommentIcon,
  HomeIcon,
  LikeIcon,
  MailIcon,
  NotificationIcon,
  ReTweetIcon,
  SearchIcon,
} from "./logos";

export const features = [
  {
    name: "home",
    icon: HomeIcon,
    link: "/",
  },
  {
    name: "explore",
    icon: SearchIcon,
    link: "/exlpore",
  },
  {
    name: "messages",
    icon: MailIcon,
    link: "/messages",
  },
  {
    name: "notifications",
    icon: NotificationIcon,
    link: "/notifications",
  },
  {
    name: "bookmarks",
    icon: BookMarkIcon,
    link: "/bookmarks",
  },
];

export const Actions = [
  {
    name: "comment",
    icon: CommentIcon,
  },
  {
    name: "retweet",
    icon: ReTweetIcon,
  },
  {
    name: "like",
    icon: LikeIcon,
  },
  {
    name: "bookmark",
    icon: BookMarkIcon2,
  },
];
