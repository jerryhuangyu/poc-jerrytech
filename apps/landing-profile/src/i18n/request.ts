import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale

	// Ensure that the incoming locale is valid
	// biome-ignore lint/suspicious/noExplicitAny: <check incoming locale>
	if (!locale || !routing.locales.includes(locale as any)) {
		locale = routing.defaultLocale
	}

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default,
	}
})
