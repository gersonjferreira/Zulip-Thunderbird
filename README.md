# Zulip Quick Access for Thunderbird

The code for this addon is based on the original [tdmrhn@Thunderbird-Quick-Access-Buttons](https://github.com/tdmrhn/Thunderbird-Quick-Access-Buttons).

## What's the difference?

The addons from the link above are designed to be minimalist and they work great like that! However, Zulip has a particularity that its proper use require us to inform a link to the team organization in the form `my_team.zulipchat.com`. So, here we add an options page that allows the user to set this link as the default addon link. If this link is not informed, by default the addon links to the generic `https://zulip.com/accounts/go/`, which works only for the Zulip cloud and cannot be used in case of self-hosted instances.
