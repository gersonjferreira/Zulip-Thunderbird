# Zulip Quick Access for Thunderbird

The code for this addon is based on the original [tdmrhn@Thunderbird-Quick-Access-Buttons](https://github.com/tdmrhn/Thunderbird-Quick-Access-Buttons).

## What's the difference?

The addons from the link above are designed to be minimalist and they work great like that!

However, Zulip has a particularity that its proper use require us to inform a link to the team organization in the form of `https://my_team.zulipchat.com`. So, here we add an options page that allows the user to set this link as the default addon link. If this link is not informed, by default the addon links to the generic `https://zulip.com/accounts/go/`, which works only for the Zulip cloud and cannot be used in case of self-hosted instances.

## How to install?

For now, please download the `zulip-thunderbird.xpi` file and install manually on Thunderbird.

After testing it for a while, I'll submit to Thunderbird list of addons.

## Activate notifications

This workaround was proposed in the gitlab page for the [florent_tassy@WhatsApp-Web-in-Thunderbird addon](https://gitlab.com/florent_tassy/whatsapp-web-in-thunderbird#how-do-i-get-rid-of-the-desktop-notification-message-).

1. Open the config editor in Thunderbird.
2. Search for `permissions.default.desktop-notification`, select `Number` and add this as a new option assigning the number 1 to instruct Thunderbird to "accept the notifications by default".
