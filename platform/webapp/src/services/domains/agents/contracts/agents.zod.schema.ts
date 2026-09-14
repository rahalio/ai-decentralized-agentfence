/**
 * Agents Domain Contracts
 *
 * Re-exports Zod schemas from @agentfence/core for runtime validation.
 * This avoids duplication and ensures alignment with the API contract.
 *
 * Architecture:
 * - Single source of truth: @agentfence/core
 * - No code duplication or drift
 * - Runtime validation of API responses
 * - Used in services to validate responses
 *
 * @see @agentfence/core/agents for the source schemas
 */

import { agentsSchemas as coreAgentsSchemas } from "@agentfence/core/agents";
import type { z } from "zod";

/**
 * Re-export schemas from core
 * These are the same schemas used by the api-server, ensuring perfect alignment
 */
export const {
  // TODO: Add specific schema exports based on OpenAPI spec
  // ResponseMeta,
  // PageInfo,
  // etc.
} = coreAgentsSchemas;

/**
 * Export all schemas as a namespace for convenience
 */
export const agentsSchemas = coreAgentsSchemas;
