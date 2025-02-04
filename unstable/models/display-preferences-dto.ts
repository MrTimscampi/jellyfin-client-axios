/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ScrollDirection } from './scroll-direction';
import { SortOrder } from './sort-order';

/**
 * Defines the display preferences for any item that supports them (usually Folders).
 * @export
 * @interface DisplayPreferencesDto
 */
export interface DisplayPreferencesDto {
    /**
     * Gets or sets the user id.
     * @type {string}
     * @memberof DisplayPreferencesDto
     */
    Id?: string | null;
    /**
     * Gets or sets the type of the view.
     * @type {string}
     * @memberof DisplayPreferencesDto
     */
    ViewType?: string | null;
    /**
     * Gets or sets the sort by.
     * @type {string}
     * @memberof DisplayPreferencesDto
     */
    SortBy?: string | null;
    /**
     * Gets or sets the index by.
     * @type {string}
     * @memberof DisplayPreferencesDto
     */
    IndexBy?: string | null;
    /**
     * Gets or sets a value indicating whether [remember indexing].
     * @type {boolean}
     * @memberof DisplayPreferencesDto
     */
    RememberIndexing?: boolean;
    /**
     * Gets or sets the height of the primary image.
     * @type {number}
     * @memberof DisplayPreferencesDto
     */
    PrimaryImageHeight?: number;
    /**
     * Gets or sets the width of the primary image.
     * @type {number}
     * @memberof DisplayPreferencesDto
     */
    PrimaryImageWidth?: number;
    /**
     * Gets or sets the custom prefs.
     * @type {{ [key: string]: string; }}
     * @memberof DisplayPreferencesDto
     */
    CustomPrefs?: { [key: string]: string; } | null;
    /**
     * Gets or sets the scroll direction.
     * @type {ScrollDirection}
     * @memberof DisplayPreferencesDto
     */
    ScrollDirection?: ScrollDirection;
    /**
     * Gets or sets a value indicating whether to show backdrops on this item.
     * @type {boolean}
     * @memberof DisplayPreferencesDto
     */
    ShowBackdrop?: boolean;
    /**
     * Gets or sets a value indicating whether [remember sorting].
     * @type {boolean}
     * @memberof DisplayPreferencesDto
     */
    RememberSorting?: boolean;
    /**
     * Gets or sets the sort order.
     * @type {SortOrder}
     * @memberof DisplayPreferencesDto
     */
    SortOrder?: SortOrder;
    /**
     * Gets or sets a value indicating whether [show sidebar].
     * @type {boolean}
     * @memberof DisplayPreferencesDto
     */
    ShowSidebar?: boolean;
    /**
     * Gets or sets the client.
     * @type {string}
     * @memberof DisplayPreferencesDto
     */
    Client?: string | null;
}


