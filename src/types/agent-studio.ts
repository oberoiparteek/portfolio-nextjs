// TypeScript definitions for Mosaic AI & LangGraph Agent Studio

export type HopType = "query" | "reasoning" | "guardrail" | "tool_call" | "observation" | "hitl_interrupt" | "synthesis" | "error_recovery";

export interface ToolCallPayload {
  callId: string;
  toolName: string;
  catalogFunction: string;
  warehouseId?: string;
  arguments: Record<string, any>;
  status: "pending" | "executing" | "completed" | "failed" | "blocked";
  rawOutput?: any;
  durationMs?: number;
}

export interface MutationManifestData {
  manifestId: string;
  targetCatalog: string;
  targetSchema: string;
  targetTable: string;
  affectedPartition: string;
  deltaRows: number;
  checksumSha256: string;
  patchSqlPreview: string;
  patchDeltaUsd: number;
  approvalRequired: boolean;
  approvalStatus: "pending" | "approved" | "rejected";
  approvedBy?: string;
  approvalTimestamp?: string;
  signedJwtToken?: string;
}

export interface TraceSpan {
  id: string;
  name: string;
  kind: "AGENT_NODE" | "GUARDRAIL" | "TOOL_EXECUTION" | "HITL_GATE" | "SYNTHESIS";
  durationMs: number;
  offsetMs: number;
  status: "OK" | "INTERRUPTED" | "ERROR" | "RETRYING" | "BLOCKED";
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  costUsd: number;
  model?: string;
  ttftMs?: number;
  attributes: Record<string, any>;
}

export interface ExecutionHop {
  hopNumber: number;
  title: string;
  type: HopType;
  activeNodeId: "user_input" | "agent_reasoning" | "guardrail" | "uc_tool" | "hitl_gate" | "delta_commit" | "synthesis";
  scratchpadThought?: string;
  toolCall?: ToolCallPayload;
  observation?: string;
  stagedMutation?: MutationManifestData;
  errorDetail?: {
    schemaError?: string;
    guardrailType?: string;
    retryCount?: number;
    maxRetries?: number;
  };
  securityInterception?: {
    policyRule: string;
    rbacRole: string;
    blockedOperation: string;
    auditLogRef: string;
  };
  agentStateSnapshot: {
    currentNode: string;
    traceId: string;
    userRole: string;
    messagesCount: number;
    retryBudgetRemaining: number;
    hitlStatus: "idle" | "awaiting_approval" | "approved" | "rejected";
    activeTool: string | null;
  };
  spansInHop: TraceSpan[];
}

export interface AgentScenario {
  id: string;
  title: string;
  tagline: string;
  category: "lakehouse_copilot" | "security_governance" | "cyclical_self_correction";
  badge: string;
  description: string;
  initialQuery: string;
  hops: ExecutionHop[];
}
