"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MustacheTemplateConstants = exports.SocialMediaPostConstants = exports.LinkedinConstants = exports.MediumConstants = exports.SteamConstants = exports.GitHubConstants = exports.PLACEHOLDER = void 0;
exports.PLACEHOLDER = "__PLACEHOLDER__";
class GitHubConstants {
}
exports.GitHubConstants = GitHubConstants;
GitHubConstants.RECENT_WORKED_ON_REPOS_URL = `https://api.github.com/user/repos`;
class SteamConstants {
}
exports.SteamConstants = SteamConstants;
SteamConstants.RECENTLY_PLAYED_URL = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/";
SteamConstants.PLAYER_ACHEIVEMENTS_URL = "http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/";
SteamConstants.GET_SCHEMA_FOR_GAME = "http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/";
class MediumConstants {
}
exports.MediumConstants = MediumConstants;
MediumConstants.MEDIUM_DOMAIN = "https://medium.com";
MediumConstants.MEDIUM_PROFILE_URL = "https://medium.com/@";
MediumConstants.MEDIUM_ICON = "https://cdn-icons-png.flaticon.com/512/2111/2111505.png";
class LinkedinConstants {
}
exports.LinkedinConstants = LinkedinConstants;
LinkedinConstants.LINKEDIN_LOGIN_URL = "https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin";
LinkedinConstants.LINKEDIN_SHARES_URL = `https://www.linkedin.com/in/${exports.PLACEHOLDER}/detail/recent-activity/shares`;
LinkedinConstants.LINKEDIN_ARTICLES_URL = `https://www.linkedin.com/in/${exports.PLACEHOLDER}/detail/recent-activity/posts`;
LinkedinConstants.LINKEDIN_FEED_UPDATE_URL = "https://www.linkedin.com/feed/update/";
LinkedinConstants.LINKEDIN_ICON = "https://cdn-icons-png.flaticon.com/512/124/124011.png";
LinkedinConstants.LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/";
class SocialMediaPostConstants {
}
exports.SocialMediaPostConstants = SocialMediaPostConstants;
SocialMediaPostConstants.SOCIAL_POSTS_PATH = "./assets/data/socials.json";
class MustacheTemplateConstants {
}
exports.MustacheTemplateConstants = MustacheTemplateConstants;
MustacheTemplateConstants.gamePath = "./assets/templates/game.mustache";
MustacheTemplateConstants.mainPath = "./assets/templates/main.mustache";
