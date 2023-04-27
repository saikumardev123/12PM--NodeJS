var url = require('url');

var data = url.parse("https://www.flipkart.com/furniture-india-ka-furniture-store?fm=neo%2Fmerchandising&iid=M_550d8fa8-1b7a-4520-b545-2b27af0d2dfe_1_372UD5BXDFYS_MC.6O12T1H9D8V3&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Home~Furniture%2BStudio_6O12T1H9D8V3&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L1_view-all&cid=6O12T1H9D8V3")

console.log(data.href.toString());