/**
 * Add Ons Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/add-ons.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AddOnPackage = components["schemas"]["AddOnPackage"];
export type AddOnPackageListData = components["schemas"]["AddOnPackageListData"];
export type AddOnStatus = components["schemas"]["AddOnStatus"];
export type AddOnAttestRequest = components["schemas"]["AddOnAttestRequest"];
export type AddOnPackageCreateRequest = components["schemas"]["AddOnPackageCreateRequest"];
export type AddOnRevokeRequest = components["schemas"]["AddOnRevokeRequest"];
export type AddOn = operations["listAddOnPackages"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type SubmitAddOnPackageRequestInput = NonNullable<operations["submitAddOnPackage"]["requestBody"]>["content"]["application/json"];
export type ApproveAddOnPackageRequestInput = NonNullable<operations["approveAddOnPackage"]["requestBody"]>["content"]["application/json"];
export type RevokeAddOnPackageRequestInput = NonNullable<operations["revokeAddOnPackage"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListAddOnPackagesParams = NonNullable<operations["listAddOnPackages"]["parameters"]["query"]>;
export type GetAddOnPackageParams = operations["getAddOnPackage"]["parameters"]["path"];
export type ApproveAddOnPackageParams = operations["approveAddOnPackage"]["parameters"]["path"];
export type RevokeAddOnPackageParams = operations["revokeAddOnPackage"]["parameters"]["path"];
export type ForceUnloadAddOnPackageParams = operations["forceUnloadAddOnPackage"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListAddOnPackagesResponse = operations["listAddOnPackages"]["responses"]["200"]["content"]["application/json"];
export type SubmitAddOnPackageResponse = operations["submitAddOnPackage"]["responses"]["201"]["content"]["application/json"];
export type GetAddOnPackageResponse = operations["getAddOnPackage"]["responses"]["200"]["content"]["application/json"];
export type ApproveAddOnPackageResponse = operations["approveAddOnPackage"]["responses"]["200"]["content"]["application/json"];
export type RevokeAddOnPackageResponse = operations["revokeAddOnPackage"]["responses"]["200"]["content"]["application/json"];
export type ForceUnloadAddOnPackageResponse = operations["forceUnloadAddOnPackage"]["responses"]["200"]["content"]["application/json"];


