export function extractErrorMessage(tx: any): string | null {
    if (!tx?.logs?.events) return null;
    const event = tx.logs.events.find((e: any) => e.identifier === 'internalVMErrors' && e.data);
    if (!event) return null;

    const data = event.data;
    if (typeof data === 'string' && data.startsWith('@')) {
        try {
            return Buffer.from(data.slice(1), 'hex').toString('utf-8');
        } catch {
            return null;
        }
    }
    return data ?? null;
}